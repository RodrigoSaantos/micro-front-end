import { TabContextData  } from "counter/hooks/useTab";
import { Container, Link } from "./styles";

let useTab = (() => ({})) as () => TabContextData;

if (typeof window === 'object') {
  useTab = (await import('counter/hooks/useTab')).useTab
}

export const NAV = [
  {id: 1, name: 'Installation'},
  {id: 2, name: 'Project Structure'},
] as const

export function Menu() {
  const { changeTab, tabSelected } = useTab()

  return (
    <Container>
      <nav>
        <ul>
          <li>
            <h3>Get Started</h3>
            <div>
              <ul>
                {NAV.map(item => (
                  <li key={item.id}>
                    <Link href={"#"} data-isactive={item.name === tabSelected} onClick={() => changeTab(item.name)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </Container>
  )
}