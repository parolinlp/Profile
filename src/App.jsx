import Index from './components/index'

export default function App() {
  return (
    <div className='app'>
      <Index 
        foto="\src\img\foto.jpg"
        nome="ANDRÉ PAROLIN "
        bio="Olá, meu nome é André Parolin. Sou estudante de programação há 4 meses e estou em busca de uma oportunidade como estagiário"
        email="andreluisparolin14@gmail.com"
        numero="(55) 1196041-1261"
        portfolio="https://stellar-starburst-aa0954.netlify.app/"
        linkedin="https://www.linkedin.com/in/andr%C3%A9-luis-parolin-silva-271601223/"
        curriculo="src\curriculo\CurrículoAndréParolin-1.pdf"
        wpp="https://wa.me/5511960411261"
      />
    </div>
  )
}