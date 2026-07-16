<template>
  <section id="contact" class="bg-[#f7f7f4] px-5 py-20 text-[#080808] sm:px-8 lg:py-28">
    <div class="mx-auto grid max-w-[96rem] gap-16 lg:grid-cols-[0.38fr_0.62fr]">
      <aside>
        <h2 class="text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[0.9] tracking-normal">
          Start a project
        </h2>

        <div class="mt-16 space-y-12 text-2xl font-semibold leading-tight">
          <div>
            <p>Office</p>
            <p class="mt-5 text-black/48">
              Los Angeles, California<br />
              Serving teams everywhere
            </p>
            <a class="mt-5 inline-block hf-link" href="mailto:headlessflowerdev@gmail.com">
              Email us
            </a>
          </div>

          <div>
            <p>Contact</p>
            <p class="mt-5 text-black/48">
              headlessflowerdev@gmail.com<br />
              (323) 709-5357
            </p>
          </div>
        </div>
      </aside>

      <div>
        <TheForm :schema="contactFormSchema" :on-submit-form="submitToSupabase" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheForm from "~/components/TheForm.vue";
import { contactFormSchema } from "~/data/contactForm.schema";
import {
  globalContactSubmissionsTable,
  toGlobalContactSubmission,
} from "~/data/globalContactSubmission.schema";

const supabase = useSupabaseClient();

async function submitToSupabase(payload: {
  form_key: string;
  form_version: number;
  fields: Record<string, any>;
  meta: Record<string, any>;
}) {
  const { error } = await supabase
    .from(globalContactSubmissionsTable)
    .insert(toGlobalContactSubmission(payload));

  if (error) throw error;
}
</script>
