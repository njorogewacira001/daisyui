export default function Home(){
    return(
        <main>
            <div className="hero bg-base-200 min-h-screen">
  <div className="max-w-5xl max auto hero-content flex-col gap-12 lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
      Spider-Man is a superhero appearing in American comic books published by Marvel Comics.
      </p>
      <button className="btn btn-primary">watch now</button>
    </div>
  </div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Click </div>
  <div className="collapse-content">
    <p>Batman</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click</div>
  <div className="collapse-content">
    <p>Antman</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click</div>
  <div className="collapse-content">
    <p>flash</p>
  </div>
</div>
        </main>
    )
}