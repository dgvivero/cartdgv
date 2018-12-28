export default function() {

  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.get('/products', function(){
    return {
      data: [{
        type: 'product',
        id: 1,
        attributes: {
        codart:"7798032933283",
        precio1n:1.144,
        descrweb:"AMOXICILINA 500 MG X 80 COMPRIMIDOS SAVANT FABAMOX AMOXICILINA 500 MG X 80 COMP",
        precio:98.55,
        codmarca:"SAVANT",
        unidmin:80,
        usaserie:false,
        nombrecomercial:"FABAMOX AMOXICILINA 500 MG X 80 COMP",
        descripcion:"AMOXICILINA 500 MG X 80 COMPRIMIDOS",
        descrabrev:"AMOXICILINA 500 MG X 80 COMPRIMIDOS",
        nroart:20068,
        pvpr:281.6,
        stockact:10160
        }
     },
     {
      type: 'product',
      id: 2,
      attributes: {
        codart:"7798032935188",
        precio1n:4.94,
        descrweb:"AMOXICILINA + CLAVULANICO 875/125 MG COMP.  SAVANT FABAMOX DUO AMOXICILINA CLAVULANICO X 70",
        precio:425.60,
        codmarca:"SAVANT",
        unidmin:70,
        usaserie:false,
        nombrecomercial:"FABAMOX DUO AMOXICILINA CLAVULANICO X 70",
        descripcion:"AMOXICILINA + CLAVULANICO 875/125 MG COMP. X 70",
        descrabrev:"AMOXICILINA + CLAVULANICO 875/125 MG COMP. X 70",
        nroart:18426,
        pvpr:1064.0,
        stockact:6440 
      }
    },{
      type: 'product',
        id: 3,
        attributes: {
      codart:"7793569001818",
      precio1n:2.6391,
      descrweb:"AMOXIGRAND AMOXICILINA 875 MG COMP. X 16 ",
      descuento:58.60,
      precio:43.48,
      codmarca:"FADA PHARMA",
      unidmin:16,
      usaserie:false,
      nombrecomercial:"AMOXIGRAND AMOXICILINA 875 MG COMP. X 16",
      descripcion:"AMOXICILINA 875 MG COMP. X 16",
      descrabrev:"AMOXIGRAND AMOXICILINA 875 MG COMP. X 16",
      nroart:6296,
      pvpr:105.04,
      stockact:9
        }
    }]
    };
  });

}
