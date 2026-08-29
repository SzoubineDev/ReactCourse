import  {CORE_CONCEPTS}  from "./data"
import Header from "./components/Header/Header";
import CoreConecpts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id = "core-concepts">
          <h2></h2>
          <ul>
            <CoreConecpts {...CORE_CONCEPTS[0]} />
            <CoreConecpts {...CORE_CONCEPTS[1]} />
            <CoreConecpts {...CORE_CONCEPTS[2]} /> 
            <CoreConecpts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Exemples</h2>
          <menu>
          <TabButton label ="Components"/>
         

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
