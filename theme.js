import theme from 'mdx-deck/themes';
import prismStyle from 'react-syntax-highlighter/styles/prism/solarizedlight';
import prismYAML from 'react-syntax-highlighter/languages/prism/yaml';

export default {
  ...theme,
  prism: {
    style: prismStyle,
    languages: {
      yaml: prismYAML
    }
  }
};
