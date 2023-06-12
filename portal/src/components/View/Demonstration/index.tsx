import React from 'react'
import { Container, Article } from './styles';
import { MenuOptions, useTab } from 'counter/hooks/useTab';

type ArticleType = {
  [key in MenuOptions]: JSX.Element
}
const Header = React.lazy(() =>
  import("header/Header").then((module) => {
    return {
      default: module.Header,
    };
  })
);

const Menu = React.lazy(() =>
  import("menu/Menu").then((module) => {
    return {
      default: module.Menu,
    };
  })
);

const Installation = React.lazy(() =>
  import("installation/Installation").then((module) => {
    return {
      default: module.Installation,
    };
  })
);

const Introduction = React.lazy(() =>
  import("installation/Introduction").then((module) => {
    return {
      default: module.Introduction,
    };
  })
);

const Structure = React.lazy(() =>
  import("structure/Structure").then((module) => {
    return {
      default: module.Structure,
    };
  })
);

const ARTICLES: ArticleType = {
  Installation: <Installation />,
  "Project Structure": <Structure />
}

export function Demonstration() {
  const { tabSelected } = useTab()
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      </React.Suspense>
      <main>
        <Container>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Menu />
          </React.Suspense>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Article>{tabSelected ? ARTICLES[tabSelected] : (
              <Introduction />
            )}</Article>
          </React.Suspense>

        </Container>
      </main>
    </>
  )
}