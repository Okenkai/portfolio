import React from 'react'

export default function Degree() {
    const pdfUrl = "/CV_Le_Carour_Alexandre.pdf";

    return (
        <div style={{ textAlign: 'center', width: '100vw', height: '100vh', paddingTop: 'calc(100vh - 85vh)' }}>
            <iframe
                src={pdfUrl}
                width="80%"
                height="100%"
                title="Prévisualisation du CV"
                style={{ border: '1px solid #ccc', borderRadius: '8px' }}
            />
            <br />
            <a href={pdfUrl} download="CV_Le_Carour_Alexandre.pdf">
                <button style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}>
                    Télécharger le CV
                </button>
            </a>
        </div>
    )
}
