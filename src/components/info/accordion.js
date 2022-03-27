import React, {Component} from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { Container } from "react-bootstrap";

export default class Accord extends Component {
    render() {
    return (
        <div className="col-md-12 p-5 text-center" stlye={{}}>
        <h4>How to Use Tour?</h4>
        <Container>
        <Accordion className="w-100 mb-3 p-3 shadow" style={{ width: 400}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
                  <Typography
                  style={{
                      fontWeight: 10,
                    }}
                    >Step 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Tekan tombol "Go Visit Tour" untuk masuk ke halaman tour</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="w-100 mb-3 p-3 shadow" style={{ width: 400}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
                  <Typography
                  style={{
                      fontWeight: 10,
                    }}
                    >Step 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Pada halaman Tour, jika ingin pindah ke gambar selanjutnya bisa tekan gambar point koordinat yang tersedia.
               Terdapat list gambar pada bagian bawah untul memudahkan anda berpindah gambar.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="w-100 mb-3 p-3 shadow" style={{ width: 400}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
                  <Typography
                  style={{
                      fontWeight: 10,
                    }}
                    >Step 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Pada bagian kanan terdapat tombol control bar yang memiliki 2 aksi, mode vr dan gyroscope yang bisa digunakkan pada perangkat mobile anda</Typography>
          </AccordionDetails>
        </Accordion>
        
        <Accordion className="w-100 mb-3 p-3 shadow" style={{ width: 400}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
                  <Typography
                  style={{
                      fontWeight: 10,
                    }}
                    >Step 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Terdapat tombol untuk kembali ke landing page pada bagian atas</Typography>
          </AccordionDetails>
        </Accordion>
        </Container>
      </div>
    )
  }
}
