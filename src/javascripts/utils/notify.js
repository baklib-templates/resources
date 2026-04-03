import Toastify from "toastify-js";

const notify = (text, options = {}) => globalNotify(text, options) || internalNotify(text, options)

const internalNotify = (text, options = {}) => {
  options.className ||= "bg-primary-50 text-primary-700";
  options.type ||= "info";
  options.duration ||= 1500;
  options.gravity ||= "top";
  options.position ||= "center";
  options.close ||= false;
  options.clear ||= false;

  if (options.type === "error") {
    options.className = "bg-red-50 text-red-700";
  }

  if(options.clear){
    var allToasts = document.getElementsByClassName("toastify");
    for (var i = 0; i < allToasts.length; i++) {
      allToasts[i].remove();
    }
  }

  Toastify({
    ...options,
    text,
    callback: function () {},
  }).showToast();
};

const globalNotify = (text, options = {}) => {
  if(window.globalNotificationController){
    window.globalNotificationController.show({ detail: { message: text, type: options.type, delay: options.duration } });
    return true
  }
  return false
};

export default notify
