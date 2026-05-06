const ImageKit = require("@imagekit/nodejs")


const imagekit = new ImageKit({
    Privatekey : process.env.ImageKit_PRIVATE_KEY,
    PublicKey : process.env.ImageKit_PUBLIC_KEY,
    UrlEndpoint : process.env.ImageKit_URL_ENDPOINT
})

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;

}
module.exports = uploadFile;