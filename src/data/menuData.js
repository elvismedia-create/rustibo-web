// src/data/menuData.js

export const categoriasData = {

  // ==========================================
  // 1. CATEGORÍA: TEX-MEX
  // ==========================================
  "tex-mex": {
    titulo: "Tex Mex",
    subtitulo: "El genuino sabor Tex Mex. México y Texas llegan a Rustibó. ¡Prueba los nuevos sabores!",
    imagenPrincipal: "/images/texmex-hero.jpg", 
    productos: [
      { id: "tm1", seccion: "Para Empezar y Compartir", nombre: "Nachos Rustibò", descripcion: "Con salsa de carne, chilli, cheddar, salsa agria y guacamole.", precio: "7,50€" },
      { id: "tm2", seccion: "Para Empezar y Compartir", nombre: "Patatas Fritas del Chef", descripcion: "Con bacon, salsa de queso cheddar y salsa ranchera.", precio: "8,00€" },
      { id: "tm3", seccion: "Para Empezar y Compartir", nombre: "Jalapeños", descripcion: "", precio: "1,50€ / ud" },
      { id: "tm4", seccion: "Para Empezar y Compartir", nombre: "Pizza Mariachi", descripcion: "Salsa de tomate picante, queso, pimiento verde y rojo, cebolla, pollo, guacamole y cheddar.", precio: "Peq: 8,50€ | Med: 13,30€" },
      { id: "tm5", seccion: "Para Empezar y Compartir", nombre: "Sandwich Pulled Pork", descripcion: "Mezclum, tomate, cheddar, pulled pork, cebolla roja y crema agria.", precio: "6,50€" },
      { id: "tm6", seccion: "Para Empezar y Compartir", nombre: "Rustibizza Mariachi", descripcion: "Salsa de tomate picante, queso, pimientos, cebolla, pollo, guacamole y cheddar.", precio: "6,00€" },
      
      { id: "tm7", seccion: "Hamburguesas Tex-Mex", nombre: "Hamburguesa Texas", descripcion: "Buey 200g, mermelada de arándanos, mezclum, cebolla caramelizada, queso de cabra y foie.", precio: "9,50€" },
      { id: "tm8", seccion: "Hamburguesas Tex-Mex", nombre: "Hamburguesa Arizona", descripcion: "Buey 200g, mezclum, cheddar, aros de cebolla, bacon y salsa barbacoa.", precio: "8,50€" },
      { id: "tm9", seccion: "Hamburguesas Tex-Mex", nombre: "Hamburguesa Atlanta", descripcion: "Buey 200g, mezclum, queso de cabra, berenjena, cebolla caramelizada y mostaza vieja.", precio: "8,50€" },
      { id: "tm10", seccion: "Hamburguesas Tex-Mex", nombre: "Hamburguesa New York", descripcion: "Buey 200g, mezclum, cheddar, bacon, cebolla, tomate y huevo frito.", precio: "9,50€" },
      { id: "tm11", seccion: "Hamburguesas Tex-Mex", nombre: "Pulled Pork Burger", descripcion: "Pulled pork, mezclum, tomate, cebolla roja, guacamole y queso cheddar.", precio: "9,50€" },
      { id: "tm12", seccion: "Hamburguesas Tex-Mex", nombre: "Hamburguesa California", descripcion: "Buey 200g, mezclum, tomate, queso picante, jalapeños, cebolla roja y salsa chipotle.", precio: "8,50€" },
      { id: "tm13", seccion: "Hamburguesas Tex-Mex", nombre: "Hamburguesa Miami (Vegana)", descripcion: "Hamburguesa vegana, tomate, mezclum, cebolla y salsa de mostaza.", precio: "8,00€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: PIZZAS
  // ==========================================
  "pizzas": {
    titulo: "Pizzas",
    subtitulo: "Descubre nuestro delicioso surtido de pizzas. Pizzas hechas con todo el sabor de Italia.",
    imagenPrincipal: "/images/pizzas-hero.jpg",
    productos: [
      { id: "pz1", nombre: "Proscuito", descripcion: "Tomate, queso y jamón york.", precio: "PEQ: 7,30€ | MED: 11,30€" },
      { id: "pz2", nombre: "Bacon", descripcion: "Tomate, queso y bacon.", precio: "PEQ: 7,50€ | MED: 11,30€" },
      { id: "pz3", nombre: "Mafiosa", descripcion: "Tomate, queso, chorizo, alcachofas, anchoas y picante.", precio: "PEQ: 8,00€ | MED: 12,00€" },
      { id: "pz4", nombre: "Serrano", descripcion: "Tomate, queso y jamón serrano.", precio: "PEQ: 8,00€ | MED: 12,00€" },
      { id: "pz5", nombre: "Capricho", descripcion: "Tomate, queso, jamón york y huevo.", precio: "PEQ: 8,00€ | MED: 12,00€" },
      { id: "pz6", nombre: "Romana", descripcion: "Tomate, queso, york y champiñón.", precio: "PEQ: 8,00€ | MED: 12,00€" },
      { id: "pz7", nombre: "Tonno", descripcion: "Tomate, queso, atún y cebolla.", precio: "PEQ: 8,00€ | MED: 12,50€" },
      { id: "pz8", nombre: "Girasole", descripcion: "Tomate, queso, york, alcachofas y huevo.", precio: "PEQ: 8,00€ | MED: 12,50€" },
      { id: "pz9", nombre: "4 Estaciones", descripcion: "Tomate, queso, alcachofas, pimiento, champiñon, anchoas.", precio: "PEQ: 8,00€ | MED: 12,50€" },
      { id: "pz10", nombre: "Duo Pizza", descripcion: "Tomate, queso, barbacoa y bacon.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz11", nombre: "Barbacoa", descripcion: "Tomate, queso, salsa de carne y salsa barbacoa.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz12", nombre: "FrankFurt", descripcion: "Tomate, queso, bacon, frankfurt y maíz.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz13", nombre: "Tropical", descripcion: "Tomate, queso, bacon, piña y pasas.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz14", nombre: "Chicken-Bacon", descripcion: "Tomate, queso, bacon, pollo y especias.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz15", nombre: "Vegetal", descripcion: "Tomate, queso, espárragos, calabacín, pimiento, champiñón y cebolla.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz16", nombre: "4 Quesos", descripcion: "Tomate y mezcla de 4 quesos.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz17", nombre: "Carbonara", descripcion: "Tomate, queso, champiñon, bacon, cebolla y nata.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz18", nombre: "Marinera", descripcion: "Tomate, queso, atún, anchoas, gambas, tronquitos y cebolla.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz19", nombre: "Campestre", descripcion: "Tomate, queso, jamón serrano, champiñon, tomate natural y nata.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz20", nombre: "Calzone", descripcion: "Tomate, queso, bacon, york, atún, alcachofa, pimiento rojo y huevo.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz21", nombre: "Rustibó", descripcion: "Tomate, queso, champiñón, atún, bacon, anchoas, huevo, pimiento rojo y cebolla.", precio: "PEQ: 8,50€ | MED: 13,00€" },
      { id: "pz22", nombre: "Pizza Kebab", descripcion: "Tomate, queso, pimiento verde, kebab y salsa de yogurt.", precio: "PEQ: 8,50€ | MED: 12,50€" },
      { id: "pz23", nombre: "Mix de Carne", descripcion: "Tomate, salsa barbacoa, queso, ternera, cerdo y pollo a la brasa.", precio: "PEQ: 8,00€ | MED: 13,00€" },
      { id: "pz24", nombre: "Especial Quesos", descripcion: "Tomate, nata, mezcla de 4 quesos y queso de cabra.", precio: "PEQ: 9,00€ | MED: 13,70€" },
      { id: "pz25", nombre: "Pollo Crujiente", descripcion: "Tomate, queso, bacon, maíz, champiñon, y pollo crujiente (empanado).", precio: "PEQ: 9,00€ | MED: 13,70€" },
      { id: "pz26", nombre: "Especial Marinera", descripcion: "Tomate, queso, atún, anchoas, gambas, tronquitos, cebolla, sepia y picadillo.", precio: "PEQ: 9,00€ | MED: 13,70€" },
      { id: "pz27", nombre: "Mariachi", descripcion: "Salsa de tomate picante, queso, pimiento verde, pimiento rojo, cebolla, pollo, guacamole y queso cheddar.", precio: "PEQ: 9,00€ | MED: 13,70€" }
    ]
  },

  // ==========================================
  // 3. CATEGORÍA: ARROCES
  // ==========================================
  "arroces": {
    titulo: "Arroces",
    subtitulo: "Arroces cocinados al momento con productos frescos. El sabor mediterráneo en tu casa.",
    imagenPrincipal: "/images/arroces-hero.jpg", 
    productos: [
      { id: "arr1", nombre: "Paella Valenciana", descripcion: "", precio: "5,00€" },
      { id: "arr2", nombre: "Fideuá", descripcion: "", precio: "5,50€" },
      { id: "arr3", nombre: "Paella de Marisco*", descripcion: "", precio: "5,50€" },
      { id: "arr4", nombre: "Arroz negro*", descripcion: "", precio: "5,00€" },
      { id: "arr5", nombre: "Arroz a Banda*", descripcion: "", precio: "5,50€" },
      { id: "arr6", nombre: "All i Pebre*", descripcion: "", precio: "Según mercado" }
    ]
  },

  // ==========================================
  // 4. CATEGORÍA: BOCADILLOS
  // ==========================================
  "bocadillos": {
    titulo: "Bocadillos",
    subtitulo: "Clásicos, calientes o fríos. Prueba nuestros estupendos bocadillos. Te sorprenderán.",
    imagenPrincipal: "/images/bocadillos-hero.jpg",
    productos: [
      { id: "boc1", nombre: "Vidalas", descripcion: "Pechuga empanada, queso, bacon, patatas, huevo, salsa cheddar y mayonesa.", precio: "7,50€" },
      { id: "boc2", nombre: "Chivito", descripcion: "Lomo, bacon, queso, huevo frito, lechuga y tomate.", precio: "6,50€" },
      { id: "boc3", nombre: "Brascada", descripcion: "Ternera, jamón a la plancha, cebolla y catalana.", precio: "6,50€" },
      { id: "boc4", nombre: "Lomo con Queso", descripcion: "Lomo con queso.", precio: "5,00€" },
      { id: "boc5", nombre: "Picantón", descripcion: "Lomo, queso, patatas fritas y salsa brava.", precio: "5,50€" },
      { id: "boc6", nombre: "Lomo a la Catalana", descripcion: "Lomo con tomate restregado.", precio: "4,50€" },
      { id: "boc7", nombre: "Sepia a la Plancha", descripcion: "Sepia a la plancha.", precio: "7,00€" },
      { id: "boc8", nombre: "Sepia a la Romana", descripcion: "Sepia rebozada.", precio: "7,00€" },
      { id: "boc9", nombre: "Especial", descripcion: "Tortilla de patatas, pimiento verde, longanizas y barbacoa.", precio: "6,00€" },
      { id: "boc10", nombre: "Tortilla a la Francesa", descripcion: "Tortilla a la francesa con longaniza.", precio: "5,80€" },
      { id: "boc11", nombre: "Tortilla a la Francesa 2", descripcion: "Tortilla a la francesa con pincho moruno.", precio: "5,80€" },
      { id: "boc12", nombre: "Rustibó", descripcion: "Lomo, pimiento verde, patatas fritas, cebolla y alioli.", precio: "6,00€" },
      { id: "boc13", nombre: "Vegetal con Pollo", descripcion: "Lechuga, tomate, pollo y mayonesa.", precio: "6,00€" },
      { id: "boc14", nombre: "Pechuga con cebolla", descripcion: "Pechuga, cebolla caramelizada y queso.", precio: "5,80€" },
      { id: "boc15", nombre: "Ternera con cebolla", descripcion: "Ternera, cebolla caramelizada y queso.", precio: "6,20€" },
      { id: "boc16", nombre: "Jamón a la Catalana", descripcion: "Jamón serrano con tomate.", precio: "4,50€" },
      { id: "boc17", nombre: "Vegetal", descripcion: "Lechuga, tomate, queso, jamón york, huevo, atún y mayonesa.", precio: "6,00€" },
      { id: "boc18", nombre: "Queso Chili", descripcion: "Sobrasada, bacon, queso picante y cebolla.", precio: "6,00€" }
    ]
  },

  // ==========================================
  // 5. CATEGORÍA: ENTRANTES
  // ==========================================
  "entrantes": {
    titulo: "Entrantes",
    subtitulo: "Patatas, tequeños, alitas, nachos... Para picar antes de que llegue lo bueno o para montarte una cena de picoteo que no olvidas. Recién hechos, calientes y con ese punto que engancha.",
    imagenPrincipal: "/images/entrantes-hero.jpg",
    productos: [
      { id: "ent1", nombre: "Tequeños (4u)", descripcion: "Rellenos de bacon con queso, gouda, nutella, sobrasada con queso, kinder y chocolate con pistacho.", precio: "5,50€" },
      { id: "ent2", nombre: "Nachos Rellenos (6u)", descripcion: "Rellenos de queso cheddar o guacamole.", precio: "4,00€" },
      { id: "ent3", nombre: "Bolas Mc&Cheese (5u)", descripcion: "", precio: "4,50€" },
      { id: "ent4", nombre: "Bolitas de Pollo o Queso (10u)", descripcion: "", precio: "4,30€" },
      { id: "ent5", nombre: "Bolitas de Jalapeño (8u)", descripcion: "", precio: "4,30€" },
      { id: "ent6", nombre: "Alitas con Picadillo", descripcion: "", precio: "7,00€" },
      { id: "ent7", nombre: "Alitas en Adobo", descripcion: "", precio: "4,50€" },
      { id: "ent8", nombre: "Sepia a la Plancha", descripcion: "", precio: "7,50€" },
      { id: "ent9", nombre: "Sepia a la Romana", descripcion: "", precio: "7,50€" },
      { id: "ent10", nombre: "Calamares Rebozada", descripcion: "", precio: "6,50€" },
      { id: "ent11", nombre: "Combo Rustibó", descripcion: "2 fingers de queso, 2 jalapeños, 2 nuggets, 2 aros de cebolla y patatas luxe.", precio: "6,50€" },
      { id: "ent12", nombre: "Gambas al Ajillo", descripcion: "", precio: "6,50€" },
      { id: "ent13", nombre: "Patatas Bravas", descripcion: "", precio: "4,00€" },
      { id: "ent14", nombre: "Patatas Fritas", descripcion: "", precio: "3,00€" },
      { id: "ent15", nombre: "Patatas Asadas", descripcion: "", precio: "3,00€" },
      { id: "ent16", nombre: "Patatas Lux", descripcion: "", precio: "4,00€" },
      { id: "ent17", nombre: "Ensaladilla Rusa", descripcion: "", precio: "4,00€" },
      { id: "ent18", nombre: "Ensaladilla de Sepia", descripcion: "", precio: "4,00€" },
      { id: "ent19", nombre: "Ensaladilla de Cangrejo", descripcion: "", precio: "4,00€" },
      { id: "ent20", nombre: "Tiras de Pechuga Rebozada", descripcion: "", precio: "4,50€" },
      { id: "ent21", nombre: "Finger de Queso (6u)", descripcion: "", precio: "4,50€" },
      { id: "ent22", nombre: "Finger de Pollo (6u)", descripcion: "", precio: "4,50€" },
      { id: "ent23", nombre: "Nuggets (6u)", descripcion: "", precio: "4,00€" },
      { id: "ent24", nombre: "Jalapeños", descripcion: "", precio: "1,30€ / ud" },
      { id: "ent25", nombre: "Albóndigas de Bacalao (6u)", descripcion: "", precio: "4,00€" },
      { id: "ent26", nombre: "Croquetas Caseras (6u)", descripcion: "Setas, ibérico o cocido.", precio: "4,00€" },
      { id: "ent27", nombre: "Croquetas (6u) Pollo o Jamón", descripcion: "Pollo o Jamón.", precio: "4,00€" },
      { id: "ent28", nombre: "Croquetas (6u) Bogavante", descripcion: "Bogavante.", precio: "5,50€" },
      { id: "ent29", nombre: "Pinchos Morunos (1u)", descripcion: "", precio: "2,50€" },
      { id: "ent30", nombre: "Aros de Cebolla", descripcion: "", precio: "4,00€" },
      { id: "ent31", nombre: "Muslos de Cangrejos (1u)", descripcion: "", precio: "1,50€" },
      { id: "ent32", nombre: "Flautas de Pollo (1u)", descripcion: "", precio: "2,50€" },
      { id: "ent33", nombre: "Camembert Frito", descripcion: "", precio: "2,50€" },
      { id: "ent34", nombre: "Tiras RustiChicken (10u)", descripcion: "", precio: "8,50€" },
      { id: "ent35", nombre: "Alitas RustiChicken (10u)", descripcion: "", precio: "8,50€" }
    ]
  },

  // ==========================================
  // 6. CATEGORÍA: ENSALADAS (¡NUEVA!)
  // ==========================================
  "ensaladas": {
    titulo: "Ensaladas",
    subtitulo: "Ensaladas frescas y recién hechas, perfectas para formar parte de vuestros menús.",
    imagenPrincipal: "/images/ensaladas-hero.jpg",
    productos: [
      { id: "ens1", nombre: "Ensalada Valenciana", descripcion: "Lechuga, tomate, cebolla y aceitunas.", precio: "3,00€" },
      { id: "ens2", nombre: "Ensalada Especial", descripcion: "Lechuga, tomate, cebolla, aceitunas, espárragos, atún y huevo duro.", precio: "4,00€" },
      { id: "ens3", nombre: "Ensalada con Pollo y Salsa Rosa", descripcion: "Lechuga, tomate, maíz, pollo y salsa rosa.", precio: "4,00€" },
      { id: "ens4", nombre: "Ensalada con Marisco", descripcion: "Lechuga, tomate, gambas, surimi, maíz, cebolla, salsa rosa.", precio: "5,00€" },
      { id: "ens5", nombre: "Ensalada Griega", descripcion: "Lechuga, tomate, cebolla, pimiento, alcaparras, queso feta y aceitunas negras.", precio: "4,50€" }
    ]
  },

  // ==========================================
  // 7. CATEGORÍA: HAMBURGUESAS 
  // ==========================================
  "hamburguesas": {
    titulo: "Hamburguesas",
    subtitulo: "El genuino sabor americano de nuestras hamburguesas te dejarán sin palabras. ¡Pruébalas!",
    imagenPrincipal: "/images/hamburguesas-hero.jpg",
    productos: [
      { id: "ham1", nombre: "Normal", descripcion: "Lechuga, tomate y cebolla.", precio: "3,50€" },
      { id: "ham2", nombre: "Normal con Queso", descripcion: "Lechuga, tomate, cebolla y queso.", precio: "4,50€" },
      { id: "ham3", nombre: "Especial", descripcion: "Lechuga, tomate, cebolla, queso, huevo y bacon.", precio: "6,00€" },
      { id: "ham4", nombre: "Rustibó", descripcion: "Lechuga, tomate, cebolla, queso, huevo, bacon y hamburguesa de sabor. Hamburguesas de sabor: pinchito y verduras.", precio: "6,00€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: CARNES ASADAS
  // ==========================================
  "carnes-asadas": {
    titulo: "Carnes",
    subtitulo: "Nuestras carnes asadas al punto perfecto. Calidad, sabor tradicional y listas para disfrutar en casa.",
    imagenPrincipal: "/images/carnes-hero.jpg",
    productos: [
      { id: "ca1", nombre: "Pollo Asado 1600gr", descripcion: "", precio: "11,00€" },
      { id: "ca2", nombre: "1/2 Pollo Asado", descripcion: "", precio: "6,50€" },
      { id: "ca3", nombre: "Alitas en Adobo", descripcion: "", precio: "4,50€" },
      { id: "ca4", nombre: "6 Alas de Pollo", descripcion: "", precio: "7,00€" },
      { id: "ca5", nombre: "Pollo a Curry", descripcion: "", precio: "13,50€" },
      { id: "ca6", nombre: "Pollo al Ajillo", descripcion: "", precio: "13,50€" },
      { id: "ca7", nombre: "Conejo al Ajillo", descripcion: "", precio: "15,50€" },
      { id: "ca8", nombre: "Conejo Asado", descripcion: "", precio: "13,50€" },
      { id: "ca9", nombre: "Paletilla de Cordero*", descripcion: "Pedido mínimo 2 personas.", precio: "S/M" },
      { id: "ca10", nombre: "Costillar a la Barbacoa, mostaza y miel", descripcion: "", precio: "12,00€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: KEBABS
  // ==========================================
  "kebabs": {
    titulo: "Kebabs",
    subtitulo: "Prueba nuestros excelentes kebabs turcos preparados con ingredientes de primerísima calidad.",
    imagenPrincipal: "/images/kebabs-hero.jpg",
    productos: [
      { id: "kb1", nombre: "Normal", descripcion: "(De ternera o pollo) lechuga, repollo, tomate, cebolla y salsa de yogurt.", precio: "5,00€" },
      { id: "kb2", nombre: "Normal con Queso", descripcion: "(De ternera o pollo) lechuga, repollo, tomate, cebolla, queso y salsa de yogurt.", precio: "5,50€" },
      { id: "kb3", nombre: "Super", descripcion: "(De ternera o pollo) lechuga, repollo, tomate, cebolla y salsa de yogurt.", precio: "6,00€" },
      { id: "kb4", nombre: "Super con Queso", descripcion: "(De ternera o pollo) lechuga, repollo, tomate, cebolla, queso y salsa de yogurt.", precio: "6,50€" },
      { id: "kb5", nombre: "Especial", descripcion: "(De ternera o pollo) tomate, lechuga, repollo, cebolla, pimiento verde o patatas y salsa de yogurt o barbacoa.", precio: "5,50€" },
      { id: "kb6", nombre: "Especial con Queso", descripcion: "(De ternera o pollo) tomate, lechuga, repollo, cebolla, pimiento verde o patatas, salsa de yogurt o barbacoa y queso.", precio: "6,00€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: PASTA
  // ==========================================
  "pasta": {
    titulo: "Pastas",
    subtitulo: "Siente todo el sabor de Italia con nuestras estupendas pastas. ¡Bon Appétit!",
    imagenPrincipal: "/images/pasta-hero.jpg",
    productos: [
      { id: "pa1", nombre: "Macarrones Boloñesas", descripcion: "Nuestra clásica salsa boloñesa casera con carne.", precio: "5,50€" },
      { id: "pa2", nombre: "Tallarines Carbonara", descripcion: "Deliciosa salsa carbonara cremosa.", precio: "5,50€" },
      { id: "pa3", nombre: "Canelones de Carne", descripcion: "Carne, tomate, bechamel y queso.", precio: "7,00€" },
      { id: "pa4", nombre: "Lasaña de Carne", descripcion: "Carne, tomate, bechamel y queso.", precio: "7,00€" },
      { id: "pa5", nombre: "Lasaña de Espinaca", descripcion: "Espinacas, bechamel y queso.", precio: "7,00€" },
      { id: "pa6", nombre: "Lasaña de Salmón", descripcion: "Salmón, espinacas, bechamel y queso.", precio: "7,00€" },
      { id: "pa7", nombre: "Mousaka", descripcion: "Carne, patata, berenjena, tomate, bechamel y queso.", precio: "5,50€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: RUSTIBIZZAS
  // ==========================================
  "rustibizza": {
    titulo: "RustiBizzas",
    subtitulo: "Descubre nuestros genuinos rollos de pizza. ¡Pruébalos!",
    imagenPrincipal: "/images/rustibizza-hero.jpg",
    productos: [
      { id: "rz1", nombre: "York", descripcion: "Tomate, queso y jamón york.", precio: "4,50€" },
      { id: "rz2", nombre: "Bacon", descripcion: "Tomate, queso y bacon.", precio: "4,50€" },
      { id: "rz3", nombre: "Champiñones", descripcion: "Tomate, queso, jamón york y champiñón.", precio: "5,00€" },
      { id: "rz4", nombre: "Vegetal", descripcion: "Tomate, pimiento rojo, pimiento verde, champiñones, cebolla y espárragos.", precio: "5,00€" },
      { id: "rz5", nombre: "Atún", descripcion: "Tomate, queso, jamón york y atún.", precio: "5,00€" },
      { id: "rz6", nombre: "4 Quesos", descripcion: "Tomate y mezcla de 4 quesos.", precio: "5,00€" },
      { id: "rz7", nombre: "Kebab", descripcion: "Tomate, queso, cebolla, kebab y salsa de yogurt o barbacoa.", precio: "5,50€" },
      { id: "rz8", nombre: "Barbacoa", descripcion: "Tomate, queso, salsa de carne y salsa barbacoa.", precio: "5,50€" },
      { id: "rz9", nombre: "Carbonara", descripcion: "Tomate, queso, bacon, champiñón y nata.", precio: "5,50€" },
      { id: "rz10", nombre: "Especial", descripcion: "Tomate, queso, bacon, cebolla, champiñón, nata y huevo.", precio: "6,00€" },
      { id: "rz11", nombre: "Mariachi", descripcion: "Salsa de tomate picante, queso, pimiento verde, pimiento rojo, cebolla, pollo, guacamole y queso cheddar.", precio: "6,00€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: POLLO RUSTICHICKEN
  // ==========================================
  "pollo-rustichicken": {
    titulo: "Pollo RustiChicken",
    subtitulo: "Descubre nuestro genuino pollo frito al estilo americano. ¡Para chuparse los dedos!",
    imagenPrincipal: "/images/pollo-hero.jpg",
    productos: [
      { id: "rc1", nombre: "6 Piezas de Pollo", descripcion: "Seis piezas de nuestro pollo frito más crujiente.", precio: "9,50€" },
      { id: "rc2", nombre: "9 Piezas de Pollo", descripcion: "Nueve piezas ideales para compartir.", precio: "12,50€" },
      { id: "rc3", nombre: "12 Piezas de Pollo", descripcion: "El cubo grande para los más hambrientos.", precio: "17,50€" },
      { id: "rc4", nombre: "10 Tiras RustiChicken", descripcion: "Tiras de pechuga de pollo marinadas y empanadas.", precio: "8,50€" },
      { id: "rc5", nombre: "10 Alas RustiChicken", descripcion: "Alitas al más puro estilo americano.", precio: "8,50€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: SANDWICHES
  // ==========================================
  "sandwiches": {
    titulo: "Sandwiches",
    subtitulo: "Ingredientes frescos y de primerísima calidad y el pan perfectamente tostado. ¡Qué más se puede pedir!",
    imagenPrincipal: "/images/sandwiches-hero.jpg",
    productos: [
      { id: "sw1", nombre: "Mixto", descripcion: "Jamón York y queso.", precio: "3,00€" },
      { id: "sw2", nombre: "Mixto con Huevo", descripcion: "Jamón York, queso y huevo.", precio: "4,00€" },
      { id: "sw3", nombre: "De Pollo", descripcion: "Lechuga, queso, pechuga, tomate y salsa rosa.", precio: "4,00€" },
      { id: "sw4", nombre: "Rustibó", descripcion: "Lechuga, tomate, pollo braseado, queso, huevo frito y mayonesa.", precio: "5,00€" },
      { id: "sw5", nombre: "Vegetal", descripcion: "Lechuga, tomate, queso, atún, espárragos, mayonesa y huevo duro.", precio: "4,00€" },
      { id: "sw6", nombre: "Del Chef", descripcion: "Lechuga, tomate, jamón york, queso, atún, huevo duro, espárragos y mayonesa.", precio: "4,50€" }
    ]
  },

  // ==========================================
  // CATEGORÍA: POSTRES
  // ==========================================
  "postres": {
    titulo: "Postres",
    subtitulo: "Termina tu pedido con nuestros tarritos dulces. Kinder, carrot cake y sabores de temporada.",
    imagenPrincipal: "/images/postres_ustibo.jpg",
    productos: [
      { id: "po1", nombre: "Tarrito Kinder", descripcion: "Postre en tarrito con sabor Kinder.", precio: "4,50€" },
      { id: "po2", nombre: "Tarrito Carrot Cake", descripcion: "Postre en tarrito estilo carrot cake.", precio: "4,50€" },
      { id: "po3", nombre: "Tarrito de Horchata con Fartons", descripcion: "Sabor de temporada. En octubre se sustituye por filipinos o tarta de queso según disponibilidad.", precio: "4,50€" }
    ]
  },


  "menu-infantil": {
  titulo: "Infantil",
  subtitulo: "¡La combinación perfecta para los pequeños de la casa!",
  imagenPrincipal: "/images/infantil-hero.jpg",
  esMenuEspecial: true,
  temaColor: "var(--color-lime)",
  icono: "🎨", 
  precioTotal: "7,00€",
  opciones: ["Hamburguesa", "Pizza pequeña", "Sandwich"],
  incluye: ["Refresco de bote", "Patatas fritas", "Petit Suisse", "Sorpresa"]
}

};
