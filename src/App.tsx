export function App() {
  return (
    <div className="h-screen flex items-center justify-center p-10 bg-pattern bg-no-repeat bg-center">
      <div className="flex flex-col gap-y-10 w-full md:max-w-2xl md:p-0">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-lg font-bold text-center">plann.er</h1>
          <p className="text-sm text-center max-w-56 m-auto">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="flex flex-col gap-2 bg-zinc-900 p-2 md:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:flex-1">
            <input
              type="text"
              placeholder="para onde vai?"
              className="flex items-center h-12 bg-transparent px-3 border md:flex-1"
            />
            <input
              type="text"
              placeholder="quando?"
              className="flex items-center h-12 bg-transparent px-3 border"
            />
          </div>
          <button className="flex items-center justify-center h-12 bg-lime-300 text-zinc-900">
            continuar
          </button>
        </div>
        <p className="text-sm text-center max-w-lg m-auto">
          Ao planejar sua viagem pela plann.er você automaticamente concorda com{' '}
          <strong>nossos termos de uso</strong> e{' '}
          <strong>políticas de privacidade</strong>.
        </p>
      </div>
    </div>
  )
}
