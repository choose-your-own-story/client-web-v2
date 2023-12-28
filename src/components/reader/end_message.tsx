import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface IEndOfBookArguments {
    numberOfChoices: number
}

function EndOfBookMessage(props: IEndOfBookArguments) {
    if (props.numberOfChoices === 0) {
        return (
            <Row>
                <Col>
                    <p key="" className="book_paragraph">
                        Fin
                    </p>
                </Col>
            </Row>
        );
    }

    return (
        <Row>
        </Row>
    );
}

export default EndOfBookMessage;
