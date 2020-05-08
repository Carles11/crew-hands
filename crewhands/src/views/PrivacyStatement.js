/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
  font-family: 'Raleway', sans-serif;
  padding-left: 20px;
  padding-right: 20px;

  min-height: 80vh;

  @media only screen and (min-width: 600px) {
    padding-left: 60px;
    padding-right: 80px;
  }
`

const PrivacyStatement = () => {
  return (
    <div>
      <Section>
        <h2>Datenschutzerklärung</h2>

        <p>
          <strong>
            <big>Datenschutzerklärung</big>
          </strong>
        </p>
        <p>
          <strong>Allgemeiner Hinweis und Pflichtinformationen</strong>
        </p>
        <p>
          <strong>Benennung der verantwortlichen Stelle</strong>
        </p>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          <span id="s3-t-firma">CriX Web Development</span>
          <br />
          <span id="s3-t-ansprechpartner">Ansprechpartner</span>
          <br />
          <span id="s3-t-strasse">Straße und Hausnummer</span>
          <br />
          <span id="s3-t-plz">PLZ</span> <span id="s3-t-ort">Ort</span>
        </p>
        <p />
        <p>
          Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
        </p>

        <p>
          <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong>
        </p>
        <p>
          Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
          Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
          Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
          formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
          Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <p>
          <strong>
            Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
          </strong>
        </p>
        <p>
          Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
          Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen
          ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der
          Sitz unseres Unternehmens befindet. Der folgende Link stellt eine
          Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:{' '}
          <a
            href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
            target="_blank"
          >
            https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
          </a>
          .
        </p>

        <p>
          <strong>Recht auf Datenübertragbarkeit</strong>
        </p>
        <p>
          Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
          Einwilligung oder in Erfüllung eines Vertrags automatisiert
          verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
          Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
          die direkte Übertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>

        <p>
          <strong>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</strong>
        </p>
        <p>
          Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
          Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu
          weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an
          uns wenden.
        </p>

        <p>
          <strong>SSL- bzw. TLS-Verschlüsselung</strong>
        </p>
        <p>
          Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
          Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
          über diese Website übermitteln, für Dritte nicht mitlesbar. Sie
          erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile
          Ihres Browsers und am Schloss-Symbol in der Browserzeile.
        </p>

        <p>
          <strong>Google Analytics</strong>
        </p>
        <p>
          Unsere Website verwendet Funktionen des Webanalysedienstes Google
          Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600
          Amphitheatre Parkway, Mountain View, CA 94043, USA.
        </p>
        <p>
          Google Analytics verwendet "Cookies." Das sind kleine Textdateien, die
          Ihr Webbrowser auf Ihrem Endgerät speichert und eine Analyse der
          Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen
          über Ihre Benutzung unserer Website werden an einen Server von Google
          übermittelt und dort gespeichert. Server-Standort ist im Regelfall die
          USA.
        </p>
        <p>
          Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir  ein
          berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser
          Webangebot und ggf. auch Werbung zu optimieren.
        </p>
        <p>IP-Anonymisierung</p>
        <p>
          Wir setzen Google Analytics in Verbindung mit der Funktion
          IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse
          innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
          Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
          vor der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in
          denen Google die volle IP-Adresse an einen Server in den USA überträgt
          und dort kürzt. In unserem Auftrag wird Google diese Informationen
          benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über
          Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung
          und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu
          erbringen. Es findet keine Zusammenführung der von Google Analytics
          übermittelten IP-Adresse mit anderen Daten von Google statt.
        </p>
        <p>Browser Plugin</p>
        <p>
          Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige
          Funktionen unserer Website könnten dadurch jedoch eingeschränkt
          werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer
          Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender
          Verarbeitung durch Google unterbinden. Dies ist möglich, indem Sie das
          über folgenden Link erreichbare Browser-Plugin herunterladen und
          installieren:{' '}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
          .
        </p>
        <p>Widerspruch gegen die Datenerfassung</p>
        <p>
          Sie können die Erfassung Ihrer Daten durch Google Analytics
          verhindern, indem Sie auf folgenden Link klicken. Es wird ein
          Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen
          Besuchen unserer Website verhindert: Google Analytics deaktivieren.
        </p>
        <p>
          Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden
          Sie in der Datenschutzerklärung von Google:{' '}
          <a href="https://support.google.com/analytics/answer/6004245?hl=de">
            https://support.google.com/analytics/answer/6004245?hl=de
          </a>
          .
        </p>
        <p>Auftragsverarbeitung</p>
        <p>
          Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben
          wir mit Google einen Vertrag über die Auftragsverarbeitung
          abgeschlossen.
        </p>
        <p>Demografische Merkmale bei Google Analytics</p>
        <p>
          Unsere Website verwendet die Funktion “demografische Merkmale” von
          Google Analytics. Mit ihr lassen sich Berichte erstellen, die Aussagen
          zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten.
          Diese Daten stammen aus interessenbezogener Werbung von Google sowie
          aus Besucherdaten von Drittanbietern. Eine Zuordnung der Daten zu
          einer bestimmten Person ist nicht möglich. Sie können diese Funktion
          jederzeit deaktivieren. Dies ist über die Anzeigeneinstellungen in
          Ihrem Google-Konto möglich oder indem Sie die Erfassung Ihrer Daten
          durch Google Analytics, wie im Punkt “Widerspruch gegen die
          Datenerfassung” erläutert, generell untersagen.
        </p>
        <p>
          <small>
            Quelle: Datenschutz-Konfigurator von{' '}
            <a
              href="http://www.mein-datenschutzbeauftragter.de"
              target="_blank"
            >
              mein-datenschutzbeauftragter.de
            </a>
          </small>
        </p>
        <button className="button muted-button">
          <Link to="/">Zur Startseite</Link>
        </button>
      </Section>
    </div>
  )
}
export default PrivacyStatement
