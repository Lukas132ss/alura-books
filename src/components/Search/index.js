import { styled } from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { books } from './dataSearch.js'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height:  ${({ booksCount }) => 200 + booksCount * 150}px; /* Ajuste a altura conforme necessário */;
    width: 100%;
`;

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid #5181AD;
    }
`


export default function Search() {
    const [booksSearch, setBooksSearch] = useState([]);

    return (
        <SearchContainer booksCount={booksSearch.length}>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante</Subtitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const text = event.target.value;
                    const booksFiltered = books.filter(book => book.nome.includes(text));
                    setBooksSearch(booksFiltered);
                }}
            />
            {booksSearch.map(book => (
                <Result>
                    <p>{book.nome}</p>
                    <img src={book.src} alt={book.nome} key={book.id} />
                </Result>
            )
            )}
        </SearchContainer>
    );
}