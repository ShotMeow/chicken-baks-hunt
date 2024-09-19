# Chicken Baks Hunt

## Установка

Установите зависимость:

```bash
npm install chicken-baks-hunt
```

## Как использовать

1. Импортируйте игру

```js
import { Game } from "chicken-baks-hunt"

const GameInner: FC = () => {
    return <Game />
}

```

2. Оберните компонент в GameProvider
```js
import { GameProvider } from 'chicken-baks-hunt'

const GameContainer: FC = () => {
    return <GameProvider>
        <GameInner />
    </GameProvider>
} 
```

3. Используйте контекст чтобы взаимодействовать с переменными игры

```js
import { Game, GameContext } from "chicken-baks-hunt"

const GameInner: FC = () => {
    const {setIsPaused, score,  /*...*/} = useContext(GameContext);
    
    return <div>
        <Game />
        <button onClick={() => setIsPaused(true)}>Пауза</button>
    </div>
}
```