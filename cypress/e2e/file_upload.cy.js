
// npm install --save-dev cypress-file-upload

describe('File Upload', () => {
  it('Single file upload',()=> {
    cy.visit('http://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('sample.pdf');
    cy.get('#file-submit').click();
    cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
  })

  it('Renaming the file while upload',()=> {
    cy.visit('http://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile({filePath:'sample.pdf',fileName:'upload.pdf'});
    cy.get('#file-submit').click();
    cy.get("div[class='example'] h3").should('have.text',"File Uploaded!")
  })

  it('Upload file by drag and drop',()=> {
    cy.visit('http://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile('sample.pdf',{
      subjectType: 'drag-n-drop'
    })
    cy.wait(3000)
    cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
    .contains('sample.pdf')
    cy.wait(2000)
    
  })

  it('Upload multiple files',()=>{
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    cy.get('#filesToUpload').attachFile(['sample.pdf','demo.pdf']);
    cy.get("div[class='main'] li:nth-child(1)").contains('sample.pdf')
    cy.get("div[class='main'] li:nth-child(2)").contains('demo.pdf')
  })

  it('uploading in shadow dom', ()=> {
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    cy.get(".smart-browse-input" ,{includeShadowDom: true}).attachFile('sample.pdf')
    cy.wait(2000)
    cy.get(".smart-item-name", {includeShadowDom: true}).contains('sample.pdf')
    cy.wait(2000)
    cy.get("smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(4) > smart-button:nth-child(1) > button:nth-child(1)",{includeShadowDom: true}).click()
  })
})
