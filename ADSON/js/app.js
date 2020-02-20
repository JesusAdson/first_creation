window.onload = () =>{
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav')

    const acontece = () => {
        $(document).ready(function(){
            $(nav).hide();
            $(burguer).click(() => {
                $(nav).show(500)
                $(burguer).hide(1000);
                $('.x').show(1000);
            })
            
            $('.x').click(() => {
                $(burguer).show(1000);
                $('.x').hide(500);
                $(nav).hide(500);
            })
        })
    }

    burguer.addEventListener('click', acontece())
}
