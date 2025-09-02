class person (name: string) = object
  val mutable _name = name
end;;

class student (name : string) = object
  inherit person name
  method study = print_endline (_name ^ "esta estudiando")
end;;

class teacher (name: string) = object
  inherit person name
  method teach = print_endline (_name ^ "esta enseñando")
end;;

let emilio = new student "Emilio";;
emilio#study;;

let mag = new teacher "Mag";;
mag#teach;;