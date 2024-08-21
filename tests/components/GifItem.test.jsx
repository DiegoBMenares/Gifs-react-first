/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Test de GifItem', () => { 

    const title = 'Goku';
    const url   = 'https://one-punch.com/saitama.jpg';


    test('Debe hacer match con el sanpshot', () => {
        
        const{container} = render(<GifItem title ={ title } url ={ url } />);
        expect (container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
    
        render(<GifItem title ={ title } url ={ url } />);
        //expect(screen.getByRole('img').alt ).toBe( title );
        
        const{src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componete', () => { 

        render(<GifItem title ={ title } url ={ url } />);

        expect(screen.getByText(title)).toBeTruthy();
    })

});