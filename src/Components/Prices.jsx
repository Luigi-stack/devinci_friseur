import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Prezzi() {
    const [prezzi, setPrezzi] = useState([]);
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT9wMdOqNrwL0DJq1Kt0X6ogaibvMm_4_tRjDLAKWrokxlSRRoSurtmyyuVWbGFlIW6r0l2gM51WuAL/pub?output=csv';  // Sostituisci con il link del tuo CSV

    useEffect(() => {
        // Funzione per caricare e analizzare il CSV
        const fetchCSV = async () => {
            try {
                const response = await fetch(csvUrl);
                const data = await response.text();

                // Split del CSV in righe
                const rows = data.split('\n');

                // Rimuovi le righe vuote
                const validRows = rows.filter(row => row.trim() !== '');

                // Righe dei dati (dalla seconda riga in poi)
                const dataRows = validRows.slice(1);

                // Mappa le righe dei dati
                const parsedData = dataRows.map((row) => {
                    const columns = row.split(','); // Usa ',' come delimitatore per le colonne

                    // Creiamo un oggetto per ogni riga con solo "Dienstleistung" e "Preis"
                    return {
                        Dienstleistung: columns[0].trim(),
                        Preis: columns[1].trim(),
                    };
                });

                // Imposta i dati nel state
                setPrezzi(parsedData);
            } catch (error) {
                console.error('Fehler beim Abrufen der CSV:', error);
            }
        };

        fetchCSV();
    }, []);

    return (
        <>
            <Container className='price_container'>
                <Row>
                    <Col md={6} sm={12}>
                        <section id="prices" className="prices">
                            <h1 className='h1_price'>Unsere Preise</h1>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Dienstleistung</th>
                                            <th className="price">Preis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prezzi.map((prezzo, index) => (
                                            <tr key={index}>
                                                <td>{prezzo.Dienstleistung}</td>
                                                <td className="price">{prezzo.Preis} €</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src="src/Images/price_salon.jpg" alt=""
                            className="img-fluid hero-image" />
                    </Col>
                </Row>
            </Container>
        </>

    );
}

export default Prezzi;