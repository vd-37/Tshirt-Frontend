// import React from "react";

// const ImageHelper = ({ product }) => {
//   const imageurl = product
//     ? product.image
//     : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
//   return (
//     <div className="rounded border border-success p-2">
//       <img
//         src={imageurl}
//         style={{ maxHeight: "100%", maxWidth: "100%" }}
//         className="mb-3 rounded"
//         alt=""
//       />
//     </div>
//   );
// };

// export default ImageHelper;
import React from "react";

const ImageHelper = ({ product }) => {
  var imageurl;
  switch (product.name) {
    case 'Levis1':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/levis1.webp";
      break;
    case 'LEVIS1':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/levis1.webp";
      break;
    case 'Levis2':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/levis2.webp";
      break;
    case 'Levis3':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/levis3.webp";
      break;
    case 'Levis4':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/levis4.webp";
      break;
    case 'Puma1':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/puma1.webp";
      break;
    case 'Puma2':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/puma2.webp";
      break;
    case 'Puma3':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/puma3.webp";
      break;
    case 'Puma4':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/puma4.webp";
      break;
    case 'Wrogn1':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/wrogn1.webp";
      break;
    case 'Wrogn2':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/wrogn2.webp";
      break;
    case 'Wrogn3':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/wrogn3.webp";
      break;
    case 'Wrogn4':
      imageurl = "https://raw.githubusercontent.com/vd-37/TshirtImages/main/wrogn4.webp";
      break;
    default:
      break;
  }
  
  return (
    <div className="p-2 products-home m-auto">
      <img
        src={imageurl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 image"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
