import Swal from "sweetalert2";
import "./swalConfig.css";

const MySwal = Swal.mixin({
  background: "#F8FAFC",
  color: "#1E293B",
  confirmButtonColor: "#189748",
  cancelButtonColor: "#15783E",
  customClass: {
    popup: "swal-popup-custom",
    title: "swal-title-custom",
    confirmButton: "swal-confirm-button-custom",
    cancelButton: "swal-cancel-button-custom",
    icon: "swal-icon-custom",
  },
});

export default MySwal;
