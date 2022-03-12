export default function Fundo(props) {
    return (
        <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={`assets/img/${props.likes.highlightedUsername}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{props.likes.highlightedUsername}</strong> e <strong>outras {props.likes.totalLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        
    );
}

// {totalLikes: 99159, highlightedUsername: "adorable_animals"}