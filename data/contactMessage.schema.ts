export const contactMessagesTable = "contact_messages";
export const contactMessageReadStorageKey = "admin:contact_messages:read_ids";

export type ContactMessage = {
    id: number;
    created_at: string;
    name: string;
    email: string;
    organization: string | null;
    message: string;
};
