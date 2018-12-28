import DS from 'ember-data';

export default DS.Model.extend({
    codart:DS.attr('string'),
    precio1n:DS.attr('number'),
    descrweb:DS.attr('string'),
    precio:DS.attr('number'),
    codmarca:DS.attr('string'),
    unidmin:DS.attr('number'),
    usaserie:DS.attr('boolean'),
    nombrecomercial:DS.attr('string'),
    descripcion:DS.attr('string'),
    descrabrev:DS.attr('string'),
    nroart:DS.attr('number'),
    pvpr:DS.attr('number'),
    stockact:DS.attr('number')
});
