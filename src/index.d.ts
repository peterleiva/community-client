module "*.md" {
  const md: string;

  export default md;
}

type ElementProps<Component> = Component extends React.ComponentType<
  infer Props
>
  ? Props extends object
    ? Props
    : never
  : never;
