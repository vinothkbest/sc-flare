import Swal from 'sweetalert2'

const simple = (title,html,icon='') => {
    Swal.fire({
        title,html,icon,confirmButtonColor: '#0f9ca6'
    })
}

const close = () => {
    Swal.close()
}

const toast = (title,icon) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        iconColor: 'white',
        customClass: {
            popup: 'success-toast'
        },
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon,title
    })
}

const toastError = (title,icon) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        iconColor: 'white',
        customClass: {
            popup: 'alt-toast'
        },
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon,title
    })
}

const processing = (text) =>{
    Swal.fire({
        text,
        showConfirmButton: false,
        allowOutsideClick: false,
        icon:'info',
        allowEscapeKey: false,
    }) 
}

const errors = (title,text) =>{
    Swal.fire({
        title,text,icon:'warning'
    }).then( confirm => {
        window.scroll({top: 0, behavior: "smooth"});
    })
}

export default {Swal,simple,close,toast,toastError,processing,errors}