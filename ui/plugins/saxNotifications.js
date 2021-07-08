import Vue from "vue";


const saxNotifications = {
  openNotification(color, icon, title, text) {
    const noti = Vue.prototype.$vs.notification({
      icon,
      color,
      position: "top-center",
      title,
      text
    })
  },
  error(text){
    this.openNotification("danger",`<i class='bx bx-error' ></i>`,"Hata",text);
  },
  success(text){
    this.openNotification("success",` <i className='bx bx-select-multiple'></i>`,"Onay",text);
  }
}

export default saxNotifications;
