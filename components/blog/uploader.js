import Quill from "quill"
import ImageUploader from "quill.imageUploader.js"
import '@writergate/quill-image-uploader-nextjs/dist/quill.imageUploader.min.css'

Quill.register("modules/imageUploader", ImageUploader)

const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            );
          }, 3500);
        });
      },
    },
  },
});
