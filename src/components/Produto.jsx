import { Button, Card } from "react-bootstrap";
import Cardproduto from "./Cardproduto";

export default function Produto(props) {
  return (
    <div style={{display: "flex"}}>
      <Cardproduto src="jean01.jpg"  title="Produto 01" body="Produto exclusivo para quem tem estilo."/>
      <Cardproduto src="jean02.jpg"  title="Produto 02" body="Calça jeans cor clara"/>
      <Cardproduto src="jean01.jpg"  title="Produto 03" body="Produto exclusivo para quem tem estilo."/>
      <Cardproduto src="jean02.jpg"  title="Produto 04" body="Calça jeans cor clara"/>
    </div>
  );
}
