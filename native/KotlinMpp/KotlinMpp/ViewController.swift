//
//  ViewController.swift
//  KotlinMpp
//
//  Created by Eric Loew on 9/16/19.
//  Copyright © 2019 erl. All rights reserved.
//

import UIKit
import SharedCode

class ViewController: UIViewController, MainView {

    @IBOutlet weak var sharedCodeMessage: UILabel!
    @IBOutlet weak var ktorMessage: UILabel!
    //MARK: - Api
    

    private lazy var presenter: MainPresenter = {
        MainPresenter (
            uiContext: UI() as KotlinCoroutineContext,
            view: self
        )
    }()
    
    //MARK: Override
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        /*
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 300, height: 21))
        label.center = CGPoint(x: 160, y: 285)
        label.textAlignment = .center
        label.font = label.font.withSize(25)
        label.text = CommonKt.createApplicationScreenMessage()
        view.addSubview(label)
        */
        
        sharedCodeMessage.text = CommonKt.createApplicationScreenMessage()
        presenter.getApplicationScreenMessage(request: MessageRequest(message: "Ktor Rocks on iOS"))
    }

    //MARK: - MainView
    func showApplicationScreenMessage(response: MessageResponse) {
        print("response message: \(response.message)")
        ktorMessage.text = response.message
    }
    
    func showError(error: KotlinThrowable) {
        let message = error.message ?? ""
        print("MainView.showError KotlinThrowable: \(message)")
        ktorMessage.text = message
    }
    
    func showError(message: String) {
        print("MainView.showError String: \(message)")
        ktorMessage.text = message
    }
}

