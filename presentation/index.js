// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/webpack-logo.gif"),
  webpack: require("../assets/what-is-webpack.png"),
  gruntgulp: require("../assets/gruntgulp.png"),
  deadcode: require("../assets/deadcode.png"),
  withoutDeadcode: require("../assets/without-deadcode.png"),
  multiEntrypoints: require("../assets/multi-entrypoints.png"),
  multiChunks: require("../assets/multi-chunks.png"),
  loaders: require("../assets/loaders.png"),
  allLoaders: require("../assets/all-loaders.png"),
  loaderParamters: require("../assets/loader-paramter.png"),
  chainedLoaders: require("../assets/chaining-loaders.png"),
  plugins: require("../assets/plugins.png"),
  pluginProcess: require("../assets/plugin-process.png"),
  reactWebpack: require("../assets/react-webpack.png"),
  jcwd: require("../assets/jcwd.gif")
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "#ff4081",
  tertiary: "#13daec"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="#222222">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Webpack
            </Heading>
            <Image src={images.logo} height="300px" />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading caps fit textColor="white">
              Webpack
            </Heading>
            <Appear fid="1">
              <Heading caps fit textColor="greenyellow">ist ein Module Bundler</Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="red">
                ist nicht ein Taskrunner
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="red">
                ist nicht ein Package Manager
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Image src={images.webpack} height="500px" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Image src={images.gruntgulp} height="300px" margin="0 auto 100px auto" />
            <Appear fid="1">
              <Heading size={3} textColor="white" textFont="primary">
                Packt einfach alles
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.deadcode} height="700px" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit textColor="white">
              Webpack
            </Heading>
            <Heading fit textColor="white">
              Packt nur die Modulen,
            </Heading>
            <Heading fit textColor="secondary">
              die wirklich gebraucht sind
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.withoutDeadcode} height="700px" />
          </Slide>
          <Slide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/single-entrypoint.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.multiEntrypoints} height="700px" />
          </Slide>
          <Slide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/multi-entrypoints.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.multiChunks} height="700px" />
          </Slide>
          <Slide transition={["zoom", "fade"]} notes="Module System">
            <Heading caps fit textColor="white">
              Webpack kann
            </Heading>
            <Layout>
              <Fill>
                <Appear fid="1">
                  <Heading size={4} textColor="secondary" margin={10}>
                    CommonJS
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Appear fid="2">
                  <Heading size={4} textColor="secondary" margin={10}>
                    AMD
                  </Heading>
                </Appear>
              </Fill>
              <Fill>
                <Appear fid="2">
                  <Heading size={4} textColor="secondary" margin={10}>
                    ES2015
                  </Heading>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.loaders} height="700" />
          </Slide>
          <Slide transition={["slide"]}>
            <CodePane
              lang="js"
              source={require("raw!../assets/loaders.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.allLoaders} height="700px" />
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={4} textColor="white">
              Loaders können Parameters haben
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/loader-parameters.example")}
              margin="20px auto 0 auto"
            />
            <Image src={images.loaderParamters} height="300px" />
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={4} textColor="white">
              Loaders können konkateniert werden
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/chained-loaders.example")}
              margin="20px auto 0 auto"
            />
            <Image src={images.chainedLoaders} height="300px" />
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.plugins} height="700px" />
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={4} textColor="white">
              Bearbeitet alle Bundles
            </Heading>
            <Image src={images.pluginProcess} height="500px" margin="50px auto auto auto" />
          </Slide>
          <Slide transition={["slide"]} textColor="secondary">
            <List>
              <Appear><ListItem>Stats</ListItem></Appear>
              <Appear><ListItem>Uglify</ListItem></Appear>
              <Appear><ListItem>Dedupe</ListItem></Appear>
              <Appear><ListItem>Write HTML</ListItem></Appear>
              <Appear><ListItem>Extract Text</ListItem></Appear>
              <Appear><ListItem>Hot Module Replacement</ListItem></Appear>
              <Appear><ListItem>Common Chunks</ListItem></Appear>
              <Appear><ListItem>...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} textColor="white">
              NPM Integration
            </Heading>
            <Appear fid="1">
              <Heading size={4} textColor="secondary" textFont="primary">
                NPM Paket installieren
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} textColor="tertiary" textFont="primary" margin="0 auto 50px auto">
                Import und Benutzen!
              </Heading>
            </Appear>
            <Appear fid="3">
              <CodePane
                lang="js"
                source={require("raw!../assets/use-jquery.example.txt")}
                margin="20px auto 0 auto"
              />
            </Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.reactWebpack} height="400px" />
          </Slide>
          <Slide transition={["slide"]}>
            <Heading fit textColor="white">
              Fragen?
            </Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={3} textColor="secondary">
              Vielen Dank!
            </Heading>
            <Image src={images.jcwd} height="300px" margin="50px auto" />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
