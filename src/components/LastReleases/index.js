import RecommendationCard from "../RecommendationCard"
import { Title } from "../Title"
import { books } from "./dataLastReleases"
import bookImg from "../../image/livro2.png"
import styled from "styled-components"

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title 
                cor="#EB9B00" 
                tamanhoFont="36px" 
            >
                ÚLTIMOS LANÇAMENTOS
            </Title>
            <NewBooksContainer>
                {books.map((book) => (
                    <img src={book.src} alt={book.nome} key={book.id} />
                )
                )}
            </NewBooksContainer>
            <RecommendationCard
                title="Talvez você se interrese por"
                subtitle="Angular 11"
                desc="Construindo uma aplicação com a plataforma Google"
                img={bookImg}	 
            />
        </LastReleasesContainer>

    )
}