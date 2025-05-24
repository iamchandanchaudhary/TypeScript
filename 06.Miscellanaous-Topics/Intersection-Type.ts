type Dragble = {
    drag: () => void;
}

type Resizeble = {
    resize: () => void;
}

type UIWidth = Dragble & Resizeble;

let textBox: UIWidth = {
    drag: () => {},
    resize: () => {}
}