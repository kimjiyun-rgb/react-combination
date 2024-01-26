import Dialog from "./Dialog";
import FancyBorder from "./FancyBorder";
function App()
{
  return (
    <div className="App">
      <Dialog
        title="어서오세요"
        message="우리 사이트에 방문하신 것을 환영합니다." />
      <FancyBorder color="red">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </FancyBorder>
    </div>
  );
}
export default App;
