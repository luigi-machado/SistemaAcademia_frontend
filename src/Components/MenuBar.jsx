
import "../Assets/MenuBar.css"


export default function MenuBar(){
    return (
        <div class="frame-8">
            <div class="frame-item"><span>Funcionário</span></div>
            <a href="/aluno"><div class="frame-item"><span>Alunos</span></div></a>
            <div class="frame-item"><span>Treino</span></div>
            <div class="frame-item"><span>Aulas</span></div>
            <a href="/planos"><div class="frame-item"><span>Planos</span></div></a>
            <div class="frame-item"><span>Avaliação Física</span></div>
            <a href="/visitante"><div class="frame-item"><span>Visitantes</span></div></a>
            <div class="frame-item"><span>Material</span></div>
        </div>
        
    );
}