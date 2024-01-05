import Swal from "sweetalert2";
import "animate.css";

export default function showSuccess(title, text) {
  Swal.fire({
    title,
    text,
    icon: "success",
    showClass: {
      popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
    },
    hideClass: {
      popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
    },
  });
}
