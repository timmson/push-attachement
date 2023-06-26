const pushAttachment = (data, options) => {
    const href = URL.createObjectURL(new Blob([data], { type: options.contentType }));
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", options.attachmentName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
};
export default pushAttachment;
