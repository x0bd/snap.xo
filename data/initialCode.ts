export const initialCode = `fn main() {
    let matches = ...;
    let text = matches.values_of_lossy("text").unwrap();
    let omit_newline = matches = matches.is_present("omit_newline");
    
    let mut ending = " ";
    if omit_newline {
        ending = "";
    }
    print!("{}{}", text.join(" "), ending);
}`;
