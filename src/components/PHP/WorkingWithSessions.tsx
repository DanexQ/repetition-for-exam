import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const WorkingWithSessions = () => {
  const highlight = useHighlight();
  highlight();

  const sessionCode = `  <?php
    session_start () ;
    echo "<p> Identyfikator sesji to: " . session_id () . " </p>";

    if (!isset($_SESSION ["odwiedziny"])) {
        $_SESSION ["odwiedziny"] = 0;
    }
    $_SESSION ["odwiedziny"]++;
    echo "<p>Odwiedziles ".$_SESSION["odwiedziny"]." razy stronę.</p>";
  ?>`;

  return (
    <S.Section id="session">
      <S.SectionTitle>Praca z sesjami</S.SectionTitle>
      <S.SectionContent>
        Sesje pozwalają identyfikować i śledzić działania użytkownika podczas
        przeglądania strony, do momentu wyłączenia przeglądarki. Dzięki funkcji{" "}
        <S.SpanBold>session_start()</S.SpanBold> przeglądarka wie, że strona
        używa sesji, a zamyka ją za pomocą{" "}
        <S.SpanBold>session_destroy()</S.SpanBold>. Natomiast sesję ustawiamy
        przez <S.SpanBold>$_SESSION["nazwa"]</S.SpanBold>.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-php">{sessionCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Sesje nie potrzebują większej logiki. Podobnie jak pliki cookies,
        pojawiały się na egzaminach bardzo rzadko, ale warto o nich wspomnieć.
      </S.SectionContent>
    </S.Section>
  );
};

export default WorkingWithSessions;
