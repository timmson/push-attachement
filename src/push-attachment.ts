interface PushAttachmentOptions {
    contentType: string // like  "text/html;charset=utf-8"
    attachmentName: string // like my.doc
}

const pushAttachment = (data: string, options: PushAttachmentOptions) => {
	const href = URL.createObjectURL(new Blob([data], {type: options.contentType}))

	const link = document.createElement("a")
	link.href = href
	link.setAttribute("download", options.attachmentName)
	document.body.appendChild(link)
	link.click()

	document.body.removeChild(link)
	URL.revokeObjectURL(href)
}

export default pushAttachment

