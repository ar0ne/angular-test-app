import 'zone.js/dist/zone-testing';
import { SignPipe } from './sign.pipe';


describe('SignPipe', () => {

    it("should be positive", () => {
        let pipe: SignPipe = new SignPipe();
        expect(pipe.transform(5)).toBe('positive');        
    });

    it("should be negative", () => {
        let pipe: SignPipe = new SignPipe();
        expect(pipe.transform(-5)).toBe('negative');        
    });


    it("should be zero", () => {
        let pipe: SignPipe = new SignPipe();
        expect(pipe.transform(0)).toBe('');        
    });


});