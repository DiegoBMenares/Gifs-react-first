/**
 * @jest-environment jsdom
 */

import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";


describe('Prueba de GifGrid', () => {

    const category = 'Goku';
    
    test('Debe de mostrar el loading inicialmente', () => {
        
        render( <GifGrid category={ category } /> );
        screen.debug()
    })
})