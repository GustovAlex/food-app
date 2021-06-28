import "./aboutUsStyles.scss"

export default function AboutUs() {
    return (
        <div className='aboutUs'>
            <h4 className='aboutUs-title'>
                Вкусно, быстро, доступно – на этих трех принципах работает
                доставка еды{" "}
                <span className='aboutUs-title-name'>«Easy Food»</span>
            </h4>
            <p className='aboutUs-text'>
                Попробуйте и убедитесь сами – суши, супы, пиццу, бургеры и блюда
                на гриле готовят лучшие повара г. Запорожья только из свежих и
                качественных ингредиентов. Все блюда, заказанные вами, готовятся
                непосредственно перед отправкой. А чтобы сохранить их вкус и
                аромат, мы используем специальную пищевую упаковку.
            </p>
        </div>
    )
}
