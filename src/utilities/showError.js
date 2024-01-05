import Swal from "sweetalert2";
import "animate.css";

export default function showError(text) {
  Swal.fire({
    title: "Error!",
    text,
    icon: "error",
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
