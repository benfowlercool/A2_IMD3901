AFRAME.registerComponent('box',{
schema:{
    width: {type: 'int', default: 0.15},
    height: {type: 'int', default: 0.2},
    depth: {type: 'int', default: 0.5},
    color: {type: 'color', default: '#FFF'},
},

multiple:true,

init: function () {
    var data = this.data;
    var el = this.el;
    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    this.material = new THREE.MeshStandardMaterial({color: data.color});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);

    let yaxis = Math.floor(Math.random() * 8) + 1;
    let zaxis = Math.floor(Math.random() * 8) - 8;
  },


  update: function (oldData) {
    var data = this.data;
    var el = this.el;

    if (Object.keys(oldData).length === 0) { return; }


    if (data.width !== oldData.width ||
        data.height !== oldData.height ||
        data.depth !== oldData.depth) {
      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height,
                                                                    data.depth);
    }

    if (data.color !== oldData.color) {
      el.getObject3D('mesh').material.color = new THREE.Color(data.color);
    }
  }
});