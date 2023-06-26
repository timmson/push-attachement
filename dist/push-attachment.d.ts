interface PushAttachmentOptions {
    contentType: string;
    attachmentName: string;
}
declare const pushAttachment: (data: string, options: PushAttachmentOptions) => void;
export default pushAttachment;
