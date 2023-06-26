import pushAttachment from "../src/push-attachment"

const source = "<h1>Hello!</h1>"
const options = {attachmentName: "hello.doc", contentType: "text/html;charset=utf-8"}

class MockBlob {

    constructor(data: Array<string>, config: any) {
        expect(data[0]).toEqual(source)
        expect(config.type).toEqual(options.contentType)
    }

}

class MockURL {

    private mockHref: MockHref

    createObjectURL(data: MockBlob): MockHref {
        this.mockHref =  new MockHref()
        return this.mockHref
    }

    revokeObjectURL(href: MockHref) {
        expect(href).toEqual(this.mockHref)
    }

}

class MockHref {

}

class MockDocument {

    public body: MockBody


    constructor() {
        this.body = new MockBody();
    }

    createElement(name: string): MockLink {
        expect(name).toEqual("a")
        return new MockLink()
    }

}

class MockBody {

    private link: MockLink

    appendChild(link: MockLink) {
        this.link = link
    }

    removeChild(link: MockLink) {
        expect(link).toEqual(this.link)
    }

}

class MockLink {

    setAttribute(name: string, value: string) {
        expect(name).toEqual("download")
        expect(value).toEqual(options.attachmentName)
    }

    click() {

    }
}

// @ts-ignore
global.Blob = MockBlob
// @ts-ignore
global.URL = new MockURL()
// @ts-ignore
global.document = new MockDocument()

describe("PushAttachment should", () => {

    test("push attachment", () => {
        pushAttachment(source, options)

        expect.assertions(7)
    })

})
