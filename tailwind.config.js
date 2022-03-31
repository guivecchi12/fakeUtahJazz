module.exports = {
  content: [
    './node_modules/tw-elements/dist/js/**/*.js',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      backgroundImage:{
        'eide': "url(https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291Y2glMjBkaW5pbmclMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        
        'exclusive': "url(https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y291Y2glMjBkaW5pbmclMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",

        'eide_opacity': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291Y2glMjBkaW5pbmclMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",

        'exclusive_opacity': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y291Y2glMjBkaW5pbmclMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",

        'loge_boxes': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1556784344-ad913c73cfc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VpdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",

        'courtside': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwc3VpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",

        'toyota': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1546545817-27f0fb006153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",

        'wcf': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1599110906763-a4ea410363e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlJTIwZm9vZCUyMGNvdXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)", 

        'lexus': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1626737953174-facf35713c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxleHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",

        'entrata': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBzcG9ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",

        'lgcy_power': 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)',

        'tailor_food':'url(https://media.istockphoto.com/photos/arabic-and-middle-eastern-dinner-table-hummus-tabbouleh-salad-salad-picture-id1175505781?k=20&m=1175505781&s=612x612&w=0&h=STomby2lCtcvpl_hxK6RhknQQWrkvpkHcoDLD4zttFk=)'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
