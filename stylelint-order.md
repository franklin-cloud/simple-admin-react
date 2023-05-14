# Order

Specify the order of content within declaration blocks.

## Options

```js
type PrimaryOption = Array<Keyword | AtRule | Rule>;

type Keyword =
  | "custom-properties"
  | "dollar-variables"
  | "at-variables"
  | "declarations"
  | "rules"
  | "at-rules"
  | "less-mixins";

type AtRule = {
  type: "at-rule",
  name?: string,
  parameter?: string | RegExp,
  hasBlock?: boolean,
};

type Rule = {
  type: "rule",
  selector?: string | RegExp,
  name?: string,
};
```

### Keyword

- custom-properties — Custom properties (e. g., --property: 10px;)
- dollar-variables — Dollar variables (e. g., $variable)
- at-variables — At-variables (e. g., @variable available in Less syntax)
- declarations — CSS declarations (e. g., display: block)
- rules — Nested rules (e. g., a { span {} })
- at-rules — Nested at-rules (e. g., div { @media () {} })
- less-mixins — Mixins in Less syntax (e. g., .mixin();)

### Examples

```json
// .stylelint.json
{
  "order/order": ["custom-properties", "dollar-variables", "declarations", "rules", "at-rules"]
}
```
