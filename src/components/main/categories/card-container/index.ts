type Props = {
  children?: string;
}

export default function CardContainer({ children }: Props) {
  return `
  <li class="card-container">
    ${children}
    <div class="like">
    </div>
  </li>
`;
}
