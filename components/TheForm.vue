<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <!-- Honeypot -->
    <div class="hidden">
      <label>
        Company website
        <input v-model="honeypot" type="text" autocomplete="off" tabindex="-1" />
      </label>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <template v-for="field in visibleFields" :key="field.key">
        <!-- Textarea -->
        <div v-if="field.type === 'textarea'" class="sm:col-span-2">
          <div class="flex items-baseline justify-between gap-3">
            <label class="text-[12px] font-semibold tracking-[0.18em] text-white/70">
              {{ field.label }} <span v-if="field.required" class="text-white/45">*</span>
            </label>
            <span v-if="errors[field.key]" class="text-xs font-medium text-red-400">
              {{ errors[field.key] }}
            </span>
          </div>

          <textarea
              v-model="values[field.key]"
              :placeholder="field.placeholder"
              :maxlength="field.maxLength"
              class="hf-input hf-textarea"
              rows="6"
          />

          <p v-if="field.help" class="mt-2 text-xs text-white/50">{{ field.help }}</p>
        </div>

        <!-- Select -->
        <div v-else-if="field.type === 'select'" class="sm:col-span-1">
          <div class="flex items-baseline justify-between gap-3">
            <label class="text-[12px] font-semibold tracking-[0.18em] text-white/70">
              {{ field.label }} <span v-if="field.required" class="text-white/45">*</span>
            </label>
            <span v-if="errors[field.key]" class="text-xs font-medium text-red-400">
              {{ errors[field.key] }}
            </span>
          </div>

          <select v-model="values[field.key]" class="hf-input">
            <option value="" disabled>Select one</option>
            <option v-for="opt in field.options" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>

          <p v-if="field.help" class="mt-2 text-xs text-white/50">{{ field.help }}</p>
        </div>

        <!-- Checkbox -->
        <div v-else-if="field.type === 'checkbox'" class="sm:col-span-2">
          <label class="flex items-start gap-3">
            <input
                v-model="values[field.key]"
                type="checkbox"
                class="mt-1 h-4 w-4 rounded border-white/25 bg-white/5"
            />
            <span class="text-sm leading-relaxed text-white/75">
              {{ field.label }}
            </span>
          </label>

          <p v-if="errors[field.key]" class="mt-2 text-xs font-medium text-red-400">
            {{ errors[field.key] }}
          </p>

          <p v-if="field.help" class="mt-2 text-xs text-white/50">{{ field.help }}</p>
        </div>

        <!-- Text / Email / Tel -->
        <div v-else class="sm:col-span-1">
          <div class="flex items-baseline justify-between gap-3">
            <label class="text-[12px] font-semibold tracking-[0.18em] text-white/70">
              {{ field.label }} <span v-if="field.required" class="text-white/45">*</span>
            </label>
            <span v-if="errors[field.key]" class="text-xs font-medium text-red-400">
              {{ errors[field.key] }}
            </span>
          </div>

          <input
              v-model="values[field.key]"
              :type="field.type"
              :placeholder="field.placeholder"
              :maxlength="field.maxLength"
              class="hf-input"
              :autocomplete="autoCompleteFor(field.key)"
          />

          <p v-if="field.help" class="mt-2 text-xs text-white/50">{{ field.help }}</p>
        </div>
      </template>

      <div class="sr-only" aria-hidden="true">
        <label for="company_website">Company website</label>
        <input
            id="company_website"
            v-model="honeypot"
            type="text"
            name="company_website"
            autocomplete="off"
            tabindex="-1"
        />
      </div>

    </div>

    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <button type="submit" class="hf-btn" :disabled="submitting">
        {{ submitting ? "SENDING…" : submitLabel }}
        <span class="ml-2 text-white/60">↗</span>
      </button>

      <p class="text-xs font-medium tracking-[0.12em] text-white/50">
        {{ privacyLine }}
      </p>
    </div>

    <p v-if="submitError" class="text-sm text-red-400">{{ submitError }}</p>
    <p v-if="submitSuccess" class="text-sm text-white/75">{{ submitSuccess }}</p>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref, unref, onMounted } from "vue";
import type { ContactFormSchema, ContactField } from "~/data/contactForm.schema";

const props = withDefaults(
    defineProps<{
      schema: ContactFormSchema;
      submitLabel?: string;
      privacyLine?: string;

      // async handler provided by parent (Supabase insert happens there)
      onSubmitForm: (payload: {
        form_key: string;
        form_version: number;
        fields: Record<string, any>;
        meta: Record<string, any>;
      }) => Promise<void>;
    }>(),
    {
      submitLabel: "BOOK A CONSULTATION",
      privacyLine: "No spam • Your info stays private",
    }
);

const submitting = ref(false);
const submitError = ref("");
const submitSuccess = ref("");

const honeypot = ref("");
const mountedAt = ref(0);

onMounted(() => {
  mountedAt.value = Date.now();
});

const values = reactive<Record<string, any>>({});
const errors = reactive<Record<string, string>>({});

function init() {
  for (const f of props.schema.fields) {
    values[f.key] = f.type === "checkbox" ? false : "";
    errors[f.key] = "";
  }
}
init();

const visibleFields = computed(() => {
  const schema = unref(props.schema);
  return schema.fields.filter((f) => {
    if (!f.dependsOn) return true;
    return values[f.dependsOn.key] === f.dependsOn.value;
  });
});

function validateField(f: ContactField) {
  errors[f.key] = "";
  const v = values[f.key];

  if (f.required) {
    if (f.type === "checkbox") {
      if (v !== true) errors[f.key] = "This field is required.";
      return;
    }
    if (typeof v !== "string" || !v.trim()) {
      errors[f.key] = "This field is required.";
      return;
    }
  }

  if (typeof v === "string" && f.maxLength && v.length > f.maxLength) {
    errors[f.key] = `Please keep under ${f.maxLength} characters.`;
  }

  if (f.type === "email" && typeof v === "string" && v.trim()) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
    if (!ok) errors[f.key] = "Please enter a valid email.";
  }
}

function validateAll() {
  let ok = true;
  for (const f of visibleFields.value) {
    validateField(f);
    if (errors[f.key]) ok = false;
  }
  return ok;
}

function autoCompleteFor(key: string) {
  if (key === "full_name") return "name";
  if (key === "email") return "email";
  if (key === "phone") return "tel";
  if (key === "company") return "organization";
  return "off";
}

async function onSubmit() {
  submitError.value = "";
  submitSuccess.value = "";

  if (submitting.value) return;

  // Honeypot: silently succeed
  if (honeypot.value.trim()) {
    submitSuccess.value = "Thanks — we’ll reply shortly.";
    return;
  }

  // Time gate (bots submit instantly)
  const elapsed = Date.now() - mountedAt.value;
  if (elapsed < 800) {
    submitError.value = "Please try again.";
    return;
  }

  const ok = validateAll();
  if (!ok) {
    submitError.value = "Please fix the highlighted fields.";
    return;
  }

  submitting.value = true;

  try {
    const payload = {
      form_key: props.schema.formKey,
      form_version: props.schema.version,
      fields: { ...values },
      meta: {
        page: typeof window !== "undefined" ? window.location.pathname : "",
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        submitted_at: new Date().toISOString(),
        elapsed_ms: elapsed,
      },
    };

    // ✅ await parent handler so we can show real errors
    await props.onSubmitForm(payload);

    submitSuccess.value = "Thanks — we’ll reply shortly.";

    // reset
    for (const f of props.schema.fields) {
      values[f.key] = f.type === "checkbox" ? false : "";
      errors[f.key] = "";
    }
    honeypot.value = "";
  } catch (e: any) {
    submitError.value = e?.message ?? "Something went wrong. Please try again.";
  } finally {
    submitting.value = false;
  }
}
</script>

<style scoped>
.hf-input {
  width: 100%;
  margin-top: 10px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  padding: 12px 14px;
  color: white;
  outline: none;
  backdrop-filter: blur(10px);
}
.hf-input::placeholder {
  color: rgba(255, 255, 255, 0.45);
}
.hf-input:focus {
  border-color: rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.08);
}
.hf-textarea {
  border-radius: 18px;
}
.hf-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.10);
  padding: 12px 18px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: white;
  transition: 150ms ease;
  backdrop-filter: blur(10px);
}
.hf-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: rgba(255, 255, 255, 0.26);
}
.hf-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
